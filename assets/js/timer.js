// ─── إعداد التواريخ ────────────────────────────────────────────
// تاريخ بداية العد التنازلي  (السنة، الشهر-1، اليوم)
const START_DATE = new Date(2026, 3, 28); // 28 أبريل 2026

// تاريخ نهاية العد التنازلي  (السنة، الشهر-1، اليوم)
const END_DATE = new Date(2026, 5, 5); // 5 يونيو 2026
// ────────────────────────────────────────────────────────────────

function timer() {
    return {
        startDate: START_DATE,
        endDate: END_DATE,
        remaining: null,

        init() {
            this.setRemaining();
            setInterval(() => {
                this.setRemaining();
            }, 1000);
        },

        setRemaining() {
            const now = new Date().getTime();
            const end = this.endDate.getTime();
            const diff = end - now;

            // إذا انتهى الوقت نضع الصفر، وإذا لم يبدأ بعد نحسب من البداية
            this.remaining = diff > 0 ? parseInt(diff / 1000) : 0;
        },

        days() {
            return {
                value: Math.floor(this.remaining / 86400),
                remaining: this.remaining % 86400
            };
        },

        hours() {
            return {
                value: Math.floor(this.days().remaining / 3600),
                remaining: this.days().remaining % 3600
            };
        },

        minutes() {
            return {
                value: Math.floor(this.hours().remaining / 60),
                remaining: this.hours().remaining % 60
            };
        },

        seconds() {
            return {
                value: this.minutes().remaining,
            };
        },

        format(value) {
            return ("0" + parseInt(value)).slice(-2);
        },

        time() {
            return {
                days: this.format(this.days().value),
                hours: this.format(this.hours().value),
                minutes: this.format(this.minutes().value),
                seconds: this.format(this.seconds().value),
            };
        },
    };
}