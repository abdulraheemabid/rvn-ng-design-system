import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IFieldTypeMetaConfig } from './types';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    exports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [

    ]
})
export class RvnServicesModule {
    /**
     * All consumers must pass in environment object which contains restBaseUrl which will be used in API service.
     * Consumers may pass in typeMetaConfig if they want to overide field type's behaviour.
     */

    public static forRoot(environment: Environment, typeMetaConfig: IFieldTypeMetaConfig = null): ModuleWithProviders<RvnServicesModule> {
        return {
            ngModule: RvnServicesModule,
            providers: [
                {
                    provide: 'environment',
                    useValue: environment
                },
                {
                    provide: 'typeMetaConfig',
                    useValue: typeMetaConfig
                }
            ]
        }
    }
}

export interface Environment {
    restBaseUrl?: string
}
