/**
 * Crops the provided string to the provided length, adding an ellipsis if the string is longer
 * than the provided length.
 */
export function cropString(s: string, maxLength: number, ellipsis: string = "…"): string {
    return s.length > maxLength ? s.substring(0, maxLength).trimEnd() + ellipsis : s;
}

export function logoToColor(logo: string): string {
    const COLORS: Record<string, string> = {
        bandcamp: "#1DA0C3",
        tidal: "black",
        spotify: "#1DB954",
        applemusic: "#FF2D55",
        amazon: "#FF9900",
        deezer: "#A238FF",
        youtube: "#FF0931",
        youtubemusic: "#FF0931",
        soundcloud: "#FF5500",
        bluesky: "#1185FE",
        newgrounds: "#EB7522",
        instagram: "#E4405F",
        twitter: "black",
        globe: "#1B2CC1",
        patreon: "black",
    };

    const ret = COLORS[logo];
    if (ret) {
        return ret;
    } else {
        throw new Error(`No color found for logo: ${logo}`);
    }
}
