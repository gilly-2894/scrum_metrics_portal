import { Metric } from './metric.model';
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'

@Injectable()
export class MetricService {
    constructor(private http: HttpClient) { }

    addTask(task: Metric): Observable<Metric> {
        return this.http.post<Metric>('api/metrics', task)
    }
}