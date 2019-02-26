node{
   def image 
    stage('checkout'){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/hanzala1234/jenkins-pract.git']]])
                  
    }
    stage('Building docker images'){
         image = docker.build("muhammadhanzala/jenkins-demo:${env.BUILD_ID}")
        
    }
    stage('Pushing docker images'){
        withDockerRegistry(credentialsId: 'c8a6e090-e1bc-4a27-a1cf-ee6fde0599e5', url: 'https://registry.hub.docker.com') {
            image.push("v${env.BUILD_ID}");

}
   stage('running Docker container'){
	image.run('-d -p 8060:8060')

}
    }
}
