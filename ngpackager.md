## Package configuration

* Use the below command to install the ng-packager in angular project 
```javascript
npm install ng-packagr --save-dev
```
* Create the ng-package.json file root application
Add below code,
```javascript
{
  "$schema": "./node_modules/ng-packagr/ng-package.schema.json",
  "lib": {
    "entryFile": "public_api.ts"
  }
}
```
* Create the public_api.ts file, it helps to expose the modules, services and component after packaging. Created the index.ts file in src folder and added the files which going to expose in outside project.

  * public_api.ts
    ```javascript
    export * from './src/app/index';
    ```
  * index.ts
    ```javascript
    export * from './common/base-connection.service';
    export * from './common/base-payload-command.service';
    export * from './common/common.module';
    ```

* Add a packager script to our package.json that we can use to tell ng-packagr to package up our library according to the configuration of ng-package.json. Also, switch private to false so that you can publish your library when you need to

```javascript
"scripts": {
  "ng": "ng",
  "start": "ng serve",
  "build": "ng build",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e",
  "packagr": "ng-packagr -p ng-package.json"
},
"private": false
```

* Use below command to create our package 
```javascript
npm run packagr
```

* CD into the dist folder and run the ***npm pack*** This will create a file in the root of the dist folder called ***comman-app-0.0.0.tgz*** . The 0.0.0 part comes from the top of your package.json. 

* From other Angular applications on your system that require your component library, you can use below command to install your library into your application.
```javascript
npm install ../some-relative-path/dist/comman-app-0.0.0.tgz 
```

* Always use relative path in library app.
* Add below code in consumer application  - angular.cli.json. It helps to remove the injection error.
```javascript
"build": {
           "preserveSymlinks": true      
         }
```

* Also install below npm package
```javascript
npm install @angular-devkit/core --save -dev
```


