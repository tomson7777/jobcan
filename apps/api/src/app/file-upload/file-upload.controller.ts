import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('file-upload')
export class FileUploadController {
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFile(@UploadedFiles() files) {
    console.log(files);
  }
}
