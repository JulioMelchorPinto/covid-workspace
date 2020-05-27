import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Countries } from '../../shared/models/countries';
import { Global } from '../../shared/models/global';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  countries: Countries[] = [];
  public summary: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
   /*  this.apiService
      .getCountries()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: Countries[]) => {
        console.log(data);
        this.countries = data;
      });
 */
      this.summary=this.apiService.getGlobal().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
        this.summary = data;
        console.log(this.summary);
      });


  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  chartOptions = {
    responsive: true,
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' },
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  onChartClick(event) {
    console.log(event);
  }
}
