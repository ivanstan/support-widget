# Support Widget

## Usage

Include javascript files from CDN:
```html
<script src="https://cdn.ivanstanojevic.me/support/main.js"></script>
```

Configure widgets by rendering hidden tag:

```html
<div id="support" data-primary-color="ff0000"></div>
```

### Form confirmation dialog
Renders material ui form confirmation dialog before user submits form. 

```html
<form 
    class="form-confirmation" 
    action="/entity/delete" 
    method="POST" 
    data-title="Confirm" 
    data-content="Really?" 
    data-yes="Sure" 
    data-no="No way!"
>
    <input type="hidden" name="_token" value="1">
    <input type="hidden" name="id" value="5">
    <button type="submit">Submit</button>
</form>
```

## Development

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
