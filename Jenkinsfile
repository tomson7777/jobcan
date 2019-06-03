#!groovy

pipeline{
    agent any
    stages{
        stage("Checkout"){
            steps{
                git branch: "develop",
                    url: "https://github.com/tomasznastaly/jobcan.git"
            }
        }
        stage("Install dependencies"){
            steps{
                bat 'npm install'
            }
        }
    }
}
