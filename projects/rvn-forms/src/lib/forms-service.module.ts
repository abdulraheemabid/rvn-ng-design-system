import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


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

    public static forRoot(environment: Environment): ModuleWithProviders<RvnServicesModule> {
        return {
            ngModule: RvnServicesModule,
            providers: [
                {
                    provide: 'environment',
                    useValue: environment
                }
            ]
        }
    }
}

export interface Environment {
    restBaseUrl?: string
}
