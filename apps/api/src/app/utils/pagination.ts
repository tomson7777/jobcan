import { FindConditions, FindManyOptions, Repository } from 'typeorm';

export interface Pagination<T> {
  pageIndex: number;
  items: T[];
  itemCount: number;
  total: number;
  pageCount: number;
}

export interface PageOptions {
  limit: number;
  page: number;
}

export type SearchOptions<T> = FindConditions<T> | FindManyOptions<T>;

export async function paginate<T>(
  repository: Repository<T>,
  { page, limit }: PageOptions,
  searchOptions?: SearchOptions<T>,
): Promise<Pagination<T>> {

  const [items, total] = await repository.findAndCount({
    skip: (page - 1) * limit,
    take: limit,
    ...searchOptions,
  });

  return {
    pageIndex: page,
    itemCount: items.length,
    pageCount: Math.ceil(total / limit),
    items,
    total,
  } as Pagination<T>;
}
