import { Routes } from '@angular/router';
import { DataBindingComponent } from './component/practise/data-binding/data-binding.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { StructuralDirectiveComponent } from './component/practise/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './component/practise/attribute-directive/component/practise/attribute-directive.component';
import { HomeComponent } from './component/practise/home/home.component';

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
    }
];
