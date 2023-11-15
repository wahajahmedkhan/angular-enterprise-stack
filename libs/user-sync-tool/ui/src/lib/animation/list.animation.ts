import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-15px)' }),
        stagger(
          '0ms',
          animate(
            '600ms ease-out',
            style({ opacity: 1, transform: 'translateX(0px)' }),
          ),
        ),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        animate(
          '600ms ease-in',
          style({ opacity: 0, transform: 'translateX(15px)' }),
        ),
      ],
      { optional: true },
    ),
  ]),
]);
