export class Conversions {
    public static metersToKilometers = (meters: number): number =>
        (!meters || meters < 0) ? 0 : Math.trunc(meters / 1000)

    public static secondsToHours = (seconds: number): number =>
        (!seconds || seconds < 0) ? 0 : Math.trunc(seconds = seconds / 60 / 60)

    public static avgSpeed = (distanceInKm: number, movingTimeInHours: number): string | number =>
        (!distanceInKm || distanceInKm < 0 || !movingTimeInHours || movingTimeInHours < 0) ? 0 : (distanceInKm / movingTimeInHours).toFixed(2)

    public static runningAvgPace = (movingTime: number, distance: number): string | number =>
        (!distance || distance < 0 || !movingTime || movingTime < 0) ? 0 : (movingTime / distance * 60).toFixed(2)
}