# Change Log

## 1.1.8 -- Developing...
* robe-react-commons updated
* Added Copy Button to Highlight
* update style in SelectInput
* Dependencies updated


## 1.1.7
* robe-react-commons updated
* Bug fixed in DateInput

## 1.1.6
* Bug fixed in DateInput
* ReCaptcha component added.
* added **RadiusGroup** element
* added **ThumbnailGroup** and **ThumbnailItem**
* added **EventLayout** element.
* Bug fixed in CheckTree
* The Action Buttons style in DataGrid has been fixed
* GoogleMap component added.
* zoom prop added to GoogleMap sample
* Dependencies Updated.

## 1.1.5 
* was update RadioInput css.
* was update Tree style.
* chart api added.
* CheckTree bugs fixed.
    * textField, valueField, childrenValue props forwarding.
    * parent selection duplicate child state fixed.
* Added Single File Test Support & Test Debuging.
* Showcase url-state sync fixed.
* Auto increment feature added to DateInput
* Bug fixed in DateInput

## 1.1.4 
* fixed style in site
* DatePicker bug fixed.
* Dependencies updated.
* bug fix childrenField in CheckTree 

## 1.1.3
* change DataForm Sample
* fixed DataForm defaultValues problem.
* fixed DataForm Sample async change DataForm problem.
* CheckTree
    * 2 methods added getSelectedItems and getUnselectedItems
    * Parent click now modifies children state.
    * Reimplemented with Tree component.
    * Tests are modified.
* Tree component added. You can use with custom item renderers.

## 1.1.2
* Upgraded **robe-react-commons** library
* Changed DataForm and added Samples to **DataForm Sample**.
* DateInput now supports long & formatted string.
* changed name of *__validate** method as *validate* in **ValidationsComponent** to be callable as public method. 
* added validate method to all Input Components classes that are exist under the in **inputs/** folder.
* Locations of folders changed;
    * /samples to  /components/samples
    * /docs  to  /components/jsons
    * New site/docs folder now includes detailed documentation (Validation, Model, etc.) 
* DataGrid row css changed.
* Filter ComponentManager bug fixed.
* DateInput
    * Addon click triggers popup
    * field will not call props.onChange until the value is valid. 
* validationDisplay example added to ValidationSample
* FaIcon (fontawesome)
    * Assets deleted. Now we are taking icons from **npm**.
    * Sample page updated.
* React-Bootstrap link added to the showcase's navbar.
* All input field samples updated with better event handling (e.target.name)
* HtmlEditor css fixed. (corners rounded)
* Config Structure changed. 
* Added docs for Ajax Request.
* Added docs for Remote Endpoint.
* Added docs for Store.
* Was changed name  docs/samples/endpoint/RemoteEndPoint to docs/samples/endpoint/RemoteEndpoint

## 1.1.1
* fixed duplicate call onchange problem in **DataForm** .

## 1.1.0
- Validation has a new display option. **validationDisplay** property will take *"block"* or *"overlay"*  to decide how to show messages. All inputs refactored to work like that.
- DataForm and ModalDataForm will forward **validationDisplay** property to all fields defined inside.
- Tests and Showcase modified according to the new usage.


## 1.0.58
* Focus bug on input fields fixed.
* Validation bug on first key press fixed.
* Dependencies updated.

## 1.0.57
* ComponentManager structure changed.
* upgraded npm package.

## 1.0.56
* upgraded npm package.

## 1.0.53
* upgraded **robe-react-commons** library version from *1.0.61* to *1.0.62*

## 1.0.52
* Fixed null problem of Multi SelectInput
* Fixed changing the problem of DataFormSample's state. *render* method of DataFormSample will called after change state. 
* Changed priority of *propsOfFields* property of **DataForm**. After that, the *propsOfFields* property has priority over the *fields* property.
* Updared robe-react-common library version. 
* Changed source-map configuration of webpack for development mode. 

## 1.0.51
* npmignore updated.
* robe-react-commons version changed.
* version updated.