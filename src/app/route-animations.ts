import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
} from '@angular/animations';

export const fadeIn =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    opacity: 0,
                }),
            ]),
            query(':enter', [
                animate('600ms ease', style({ opacity: 1 }))
            ])
        ])
    ]);
