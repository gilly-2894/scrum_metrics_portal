import { MetricSentiment } from './metric-sentiment.model';
export class Metric {
    constructor(
        public scrumTeamName: string,
        public codebaseHealth: MetricSentiment,
        public easyToRelease: MetricSentiment,
        public pawnsOrPlayers: MetricSentiment,
        public mission: MetricSentiment,
        public teamwork: MetricSentiment,
        public fun: MetricSentiment
    ) {}
}