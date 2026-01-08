import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent {
  profile = {
    name: 'Anes Bojić',
    title: 'Software Developer',
    imageUrl: 'slika.jpg',
    location: 'Mostar / Travnik, BiH', // [cite: 13, 14]
    email: 'anes.bojic100@gmail.com', // [cite: 10]
    phone: '(+387) 61373960', // [cite: 5]
    github: 'https://github.com/AnesBojic', // [cite: 11]
    linkedin: 'https://www.linkedin.com/in/anes-bojić-3b63172a0', // [cite: 12]
    about: 'Young and ambitious student of FIT (Faculty of Information Technologies), with the will to master both software and hardware technologies.' // [cite: 16]
  };

  skills = ['.NET C#', 'Laravel PHP', 'C++', 'Angular TS', 'MySQL', 'Microsoft SQL', 'MariaDB', 'Hardware knowledge', 'Firebase', 'GitHub', 'Azure']; //

  languages = [
    { name: 'Bosnian', level: 'Native' }, // [cite: 50]
    { name: 'English', level: 'C1 - Proficient User' } // [cite: 52, 53]
  ];

  experience = [
    {
      company: 'QSD - Quality Software Development',
      role: 'Internship - Backend developer', // [cite: 30]
      period: '30/10/2023 - 01/12/2023', // [cite: 31]
      points: [
        'Developed web application using Laravel and MySQL.', // [cite: 34]
        'Designed database schemas, data models, and relationships.', // [cite: 35]
        'Built REST APIs and implemented authentication/CRUD.', // [cite: 36, 37]
        'Used Git, Trello, Slack, and Agile workflow.' // [cite: 39, 40]
      ]
    }
  ];

  projects = [
    {
      name: 'WEB Shop - Hrke shop', // [cite: 42]
      tech: 'C#.NET, Angular, MySQL', // [cite: 44, 45]
      desc: 'Faculty project consisting of a .NET backend and Angular frontend. Managed via Azure DevOps and GitHub.' // [cite: 43, 46]
    }
  ];

  volunteering = [
    { role: 'Alumni member', org: 'BEST Mostar', period: '05/2025 - Current' }, // [cite: 80, 81]
    { role: 'Full member', org: 'BEST Mostar', period: '09/2021 - 05/2025' } // [cite: 77, 78]
  ];
}
