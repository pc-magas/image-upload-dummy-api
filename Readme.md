# Dummy File Upload Data

> NOTE:
> The whole purpoce of the api is to provide a simple way to upload JSON data somewhere.
> Is made for **experimental** use and **NOT** recomended for any production use.

## Check if the api works

You can test your upload by running the fillowing command:

```
$ node ./src/uploadImage.js <filename>
```

## Setup parameters

You can provide settingsa via the following enviromental variables:

Variable Name | Default Value | Description
--- | --- | ---
HTTP_PORT | 9090 | The port to listen over the network
UPLOAD_DIR | ^project's path^/data | Where the images will get uploaded. By default it autogenerates a folder `data` into project's root path.

## Status codes

The status codes that are returned are:

Status Code | Method | Reasons
--- | --- | ---
201 | POST | When the requestes source successfully returnsits content
400 | POST | When the body is malformed or has missing parameters
500 | POST, GET | When any nature of error occurs
404 | GET | When the resource has not data

## Endpoints

### /images

#### Allowed methods
The endpoint supports only the `POST` method.

#### Request
The request body that needs to get provided is:

```json
    {
        'name': "^the filename to store the data^",
        'data': "^the file data encoded as base64^"
    }
```
Keep in mind to replace the values in `^` with the appropriate content.

#### Response
The response is a json with the following format:

```json
{
    'message': "^Some message^",
    'path': "^where the file is stored to the api^",
    'name': "^The filename of the uploaded file^"
}
```
Keep in mind that values in `^` are replaced with the approrpiate ones from the api.
