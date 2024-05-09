import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit{
  @Input()
  githubRepos!: any[];
  constructor() { }
  p: number = 1;
  ngOnInit(): void {
    throw new Error('Method not implemented.');

  }

}


