import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  education = [
    {title: 'Education 1', dateRange: '2017-2021', description: 'Description of Education 1'},
    {title: 'Education 2', dateRange: '2017-2019', description: 'Description of Education 2'},
    {title: 'Education 3', dateRange: '2021-2022', description: 'Description of Education 3'}
  ];
  experience = [
    {title: 'Experience 1', dateRange: '2018-2021', description: 'Description of Experience 1'},
    {title: 'Experience 2', dateRange: '2018-2019', description: 'Description of Experience 2'},
    {title: 'Experience 3', dateRange: '2020-2022', description: 'Description of Experience 3'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
