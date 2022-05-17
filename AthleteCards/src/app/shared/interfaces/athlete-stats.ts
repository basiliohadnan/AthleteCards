import { AllRideTotals } from "./all-ride-totals";
import { AllRunTotals } from "./all-run-totals";

export interface AthleteStats {
    all_ride_totals: AllRideTotals,
    all_run_totals: AllRunTotals,
    all_swim_totals: Object,
    biggest_climb_elevation_gain: number,
    biggest_ride_distance: number
    recent_ride_totals: Object,
    recent_run_totals: Object,
    recent_swim_totals: Object,
    ytd_ride_totals: Object,
    ytd_run_totals: Object,
    ytd_swim_totals: Object,
}