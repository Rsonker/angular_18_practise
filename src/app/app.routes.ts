import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/practise/data-binding/data-binding.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './component/practise/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './component/practise/attribute-directive/component/practise/attribute-directive.component';
import { HomeComponent } from './component/practise/home/home.component';
import { IfelseComponent } from './component/practise/controlFlow/ifelse/ifelse.component';
import { ForLoopComponent } from './component/practise/controlFlow/for-loop/for-loop.component';
import { PipeComponent } from './component/practise/pipe/pipe.component';
import { TemplateFormComponent } from './component/practise/form/template-form/template-form.component';
import { ReactiveFormComponent } from './component/practise/form/reactive-form/reactive-form.component';
import { GetApiComponent } from './component/practise/apiCalls/get-api/get-api.component';
import { PostApiComponent } from './component/practise/apiCalls/post-api/post-api.component';
import { UpdateApiComponent } from './component/practise/apiCalls/update-api/update-api.component';
import { ServiceApiComponent } from './component/practise/apiCalls/service-api/service-api.component';
import { PopupsComponent } from './component/shared/popups/popups.component';
import { TaskPopupComponent } from './component/shared/popups/task-popup/task-popup.component';
import { TaskPageComponent } from './task-page/task-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            title: 'Home'
        }
    },
    {
        path: 'add-emp',
        component: AddEmployeeComponent,
        data: {
            title: 'Add New Employee'
        }
    },
    {
        path: 'data-binding',
        component: DataBindingComponent,
        data: {
            title: 'Data Binding'
        }
    },
    {
        path:'emp-list',
        component: EmployeeListComponent,
        data: {
            title: 'List of Employees'
        }
    },
    {
        path:'structural-directive',
        component: StructuralDirectiveComponent,
        data: {
            title: 'Structural Directive'
        }
    },
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent,
        data: {
            title: 'Attribute Directive'
        }
    },
    {
        path: 'control-flow/if-else',
        component: IfelseComponent,
        data: {
            title: 'If Else'
        }
    },
    {
        path: 'control-flow/for-loop',
        component: ForLoopComponent,
        data: {
            title: 'For Loop'
        }
    },
    {
        path: 'pipes',
        component: PipeComponent,
        data: {
            title: 'Pipes'
        }
    },
    {
        path: 'forms/templateForm',
        component: TemplateFormComponent,
        data: {
            title: 'Template Form'
        }
    },
    {
        path: 'forms/reactiveForm',
        component: ReactiveFormComponent,
        data: {
            title: 'Reactive Form'
        }
    },
    {
        path: 'api/getApi',
        component: GetApiComponent,
        data: {
            title: 'Get API'
        }
    },
    {
        path: 'api/postApi',
        component: PostApiComponent,
        data: {
            title: 'Post API'
        }
    },
    {
        path: 'api/updateApi',
        component: UpdateApiComponent,
        data: {
            title: 'Update API'
        }
    },
    {
        path: 'api/serviceApi',
        component: ServiceApiComponent,
        data: {
            title: 'Service API'
        }
    },
    {
        path: 'popups',
        component: PopupsComponent,
        data: {
            title: 'Bootstrap Modals'
        }
    },
    {
        path: 'task',
        component: TaskPageComponent,
        data: {
            title: 'Bootstrap Modals with Task Example'
        }
    },
];
