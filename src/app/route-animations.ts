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

// export const fadeIn =
//     trigger('routeAnimations', [
//         transition('* <=> *', [
//             // Set a default  style for enter and leave
//             query(':enter, :leave', [
//                 style({
//                     position: 'absolute',
//                     left: 0,
//                     width: '100%',
//                     opacity: 0,
//                     transform: 'scale(0) translateY(100%)',
//                 }),
//             ]),
//             // Animate the new page in
//             query(':enter', [
//                 animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
//             ])
//         ]),
//     ]);

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
