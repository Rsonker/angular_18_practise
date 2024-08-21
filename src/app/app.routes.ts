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

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path:'structural-directive',
        component: StructuralDirectiveComponent
    },
    {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
    },
    {
        path: 'control-flow/if-else',
        component: IfelseComponent
    },
    {
        path: 'control-flow/for-loop',
        component: ForLoopComponent
    },
    {
        path: 'pipes',
        component: PipeComponent
    },
    {
        path: 'forms/templateForm',
        component: TemplateFormComponent
    },
    {
        path: 'forms/reactiveForm',
        component: ReactiveFormComponent
    },
];
