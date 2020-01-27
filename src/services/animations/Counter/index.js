class CounterAnimation {
    /**
     * Animate the element as a counter
     * 
     * @param { Number } start          Set the start value of the counter (integer)
     * @param { Number } end            Set the end value of the counter (integer)
     * @param { Number } duration       Set the duration of the counter (millisecond)
     * @param { HTMLElement } element   Set the counter
     * @param { Function } stopFunction Set what we want when the counter is stopped
     */

    constructor(start, end, duration, element, stopFunction) {
        // Params
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.element = element;
        this.stopFunction = stopFunction;

        // Local
        this.timer = null;
        this.current = null;
        this.increment = null;

        // TIPS: You can create outside the class, the same timer with the stepTime
        // e.g.
        // const timer = setInterval(function() {
        //     element.style.width = `${CounterAnimationElement.current}%`;

        //     CounterAnimationElement.current === 100 && clearInterval(timer);
        // }, CounterAnimationElement.stepTime); 
        this.stepTime = 1000;
    }

    counter() {
        this.current += this.increment;

        // eslint-disable-next-line no-irregular-whitespace
        this.element.textContent = this.current;
        this.element.setAttribute("data-percentage", this.current);

        if(this.current === this.end) {
            this.stop();
        }
    }

    animate() {
        // Maintaining scope
        const _this = this;

        const html = document.documentElement;

        html.classList.add("on-load");

        const range = this.end - this.start;
        this.stepTime = Math.abs(Math.floor(this.duration / range));
        
        this.current = this.start;
        this.increment = this.end > this.start ? 1 : -1;
        this.timer = setInterval(function() {
            _this.counter();
        }, this.stepTime);
    }

    stop() {
        this.stopFunction();

        clearInterval(this.timer);
    }
}

export default CounterAnimation;