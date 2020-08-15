import { HttpClient } from '@angular/common/http';
import { MetricService } from './metric.service';
import { MetricSentiment } from './metric-sentiment.model';
import { Metric } from './metric.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css'],
  providers: [MetricService]
})
export class MetricsComponent implements OnInit {


  codebaseHealthSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  easyToReleaseSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  pawnsOrPlayersSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  missionSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  teamworkSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  funSentiment: MetricSentiment = new MetricSentiment(null, null, null);
  
  metric: Metric = new Metric(
    null, 
    this.codebaseHealthSentiment,
    this.easyToReleaseSentiment, 
    this.pawnsOrPlayersSentiment, 
    this.missionSentiment, 
    this.teamworkSentiment, 
    this.funSentiment);

  constructor(private taskService: MetricService, private http: HttpClient) { 
  }

  ngOnInit(): void {
  }

  postMetricsToBackend() {

    console.log('hello, World --> ' + this.metric);
    

    this.taskService.addTask(this.metric).subscribe(() => {
      console.log('Metrics Added');
      this.clearMetricData();
    })

    

  }

  clearMetricData() {
    this.codebaseHealthSentiment = new MetricSentiment(null, null, null);
    this.easyToReleaseSentiment = new MetricSentiment(null, null, null);
    this.pawnsOrPlayersSentiment = new MetricSentiment(null, null, null);
    this.missionSentiment = new MetricSentiment(null, null, null);
    this.teamworkSentiment = new MetricSentiment(null, null, null);
    this.funSentiment = new MetricSentiment(null, null, null);
    this.metric = new Metric(null,
      this.codebaseHealthSentiment,
      this.easyToReleaseSentiment,
      this.pawnsOrPlayersSentiment,
      this.missionSentiment,
      this.teamworkSentiment,
      this.funSentiment);
  }

}
