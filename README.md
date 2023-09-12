# lytho-assesment
Pictures application using Angular+Spring+MongoDB for Lytho Assesment.

Using:
  -OS: win32 x64
  -Package Manager: npm 9.6.7

Front-end:
  -Angular CLI: 16.2.1

Back-end:
  -Spring Boot Tools v1.48.0 (VScode)
  -openjdk version "17.0.8.1" 2023-08-24 LTS
  -OpenJDK Runtime Environment Microsoft-8297089 (build 17.0.8.1+1-LTS)
  -OpenJDK 64-Bit Server VM Microsoft-8297089 (build 17.0.8.1+1-LTS, mixed mode, sharing)

-MongoDB

To run on localhost:
-run on front-end folder: ng serve -port 8081
-run backend (you can do it using your prefered IDE, in my case VsCode + Spring Boot Tools)
-Enter to http://localhost:8081/

Notes on DB:
-MongoDB should run local on port 27017.
-MongoDB database should be: martin-lytho
-Collection: "pictures"
-COllection row example: 
{
  "_id": {
    "$oid": "64ff298b29478cebdc2a2904"
  },
  "name": "Pastel de Choclo",
  "description": "Classis chilean corn dish",
  "urlPath": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/El_pastel_de_choclo.jpg/1199px-El_pastel_de_choclo.jpg?20151019023518"
}




