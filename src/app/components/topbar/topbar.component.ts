import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  socials = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/AsstBergamoEst/',
      icon: 'facebook',
    },
    {
      name: 'Youtube',
      link: 'https://www.youtube.com/@asstbergamoest1265?app=desktop',
      icon: 'youtube'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/asst_bergamo_est/',
      icon: 'instagram',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/company/asst-bergamo-est?trk=ppro_cprof',
      icon: 'linkedin',
    },
  ]
}
