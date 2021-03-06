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
201 | POST | When the requestes source successfully returnsits content.
200 | GET | When the resource of the request exists and is able to fetch data.
400 | POST | When the body is malformed or has missing parameters.
500 | POST, GET | When any nature of error occurs.
404 | GET | When the resource has not data.
501 | (ANY Method) | It gets returned when an endpoint is yet to be implemented.

## Errors

In case of an error ALL the endpoints return a response that does NOT have `200` or `201` status code and have the following body:

```json
{
    'message': "^the error message^"
}
```
Keep in mind that value in `^` is replaced with the approrpiate message from the api. Also error mresponses have `Content-type:application/json` header as well.

## Endpoints

### /image

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
Keep in mind to replace the values in `^` with the appropriate content. In case of no json body provided or into the request body provided has not both of `name` or `data` attributes thenthe api responde with http error `400`.

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

### /image/:imageName

### Allowed methods
The endpoint supports only the `GET` method.

### Request
Over the url just replace the `:imageName` image in order to get the image data of the filename. 

If the file does not exist then it returns an http reposne with `404` status code and the body in **json** exactly the same as the ones that the api repsponses and response header `Content-type:application/json`.  If the image exists the image data will be into the response body with the `Content-type` header having the appropriate mime type. In any other case it will return a response similar with the one that is when the image does not exist with the difference that will have error `500`.
