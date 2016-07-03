import {describe, expect, inject, it, beforeEach, addProviders} from "@angular/core/testing";
import {DynamicFormBootstrapComponent, DYNAMIC_FORM_UI_BOOTSTRAP} from "./dynamic-form-bootstrap.component";

describe("DynamicFormBootstrapComponent test suite", () => {

    beforeEach(() => {
        addProviders([DynamicFormBootstrapComponent]);
    });

    it("tests if component initializes correctly", inject([DynamicFormBootstrapComponent],
        (component) => {

            expect(component).toBeDefined();
            expect(component.type).toEqual(DYNAMIC_FORM_UI_BOOTSTRAP);
        }));

});