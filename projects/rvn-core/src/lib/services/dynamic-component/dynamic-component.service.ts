import { KeyValue } from '@angular/common';
import { ComponentFactoryResolver, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from '../../utils/funtions.util';

@Injectable({
  providedIn: 'root'
})
/**
 * Use this service for dynamically ingecting components
 */
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  /**
   * Call this function if want to ingect a component into a viewContainerRef.
   */
  public injectComponent(viewContainerRef: ViewContainerRef, component: any, inputs: KeyValue<string, any>[], clearContainer: boolean = true) {

    return new Observable<ComponentRef<any>>(
      sub => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        if (!isNullOrUndefined(componentFactory)) {
          if (clearContainer) viewContainerRef.clear();
          const componentRef = viewContainerRef.createComponent(componentFactory);

          inputs.forEach(i => {
            componentRef.instance[i.key] = i.value;
          });

          sub.next(componentRef);
          sub.complete();

        } else {
          sub.error();
        }
      });
  }
}
