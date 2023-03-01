import Widget from "@arcgis/core/widgets/Widget.js";
import * as watchUtils from "@arcgis/core/core/watchUtils.js";
import { subclass, property } from "@arcgis/core/core/accessorSupport/decorators";
import { tsx } from "@arcgis/core/widgets/support/widget";

@subclass("esri.widgets.HelloWorld")
class HelloWorld extends Widget {

	// Create 'name' property
	@property()
	name: string = "John Smith";
	

	constructor(params?: any) {
		super(params);
		//this._onNameUpdate = this._onNameUpdate.bind(this);
	}
	
	//postInitialize() {
	//	const handle = watchUtils.init(this, "name", this._onNameUpdate);
	//
	//	// Helper used for cleaning up resources once the widget is destroyed
	//	this.own(handle);
	//}

	render() {
	  return (
		<div>
		  {this.name}
		</div>
	  );
	}
}
export default HelloWorld;