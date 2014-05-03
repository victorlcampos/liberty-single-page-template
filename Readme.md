# Angular Single Page Template for Grunt-init

## How to Install
1 - Through Liberty Framework(https://github.com/victorlcampos/liberty):
    Adding this line to dependences:
    ```
    grunt-init-template single_page_template git@github.com:victorlcampos/liberty-single-page-template.git
    ```

2 - Through git:
    Clone this project in ~/.grunt-init/
    ```
    git clone git@github.com:victorlcampos/liberty-single-page-template.git single-page-template
    ```
## How to use

    ```
        cd folder_you_want_init_project
        grunt-init single-page-template
        npm install
    ```

## Features

    1. Run server
    ```
        npm start
    ```
    2. Unit test
    ```
        npm test
    ```
    3. End 2 End  test
    ```
        gulp e2e-test
    ```
    4. Generate Controller
    ```
        node generator.js controller controller_name
    ```
    5. Generate Service
    ```
        node generator.js service service_name
    ```

