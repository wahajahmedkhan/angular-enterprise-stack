import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = (duration = '600ms') =>
  trigger('listAnimation', [
    transition('* => *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateX(30px)' }),
          animate(
            `${duration} ease-out`,
            style({ opacity: 1, transform: 'translateX(0px)' }),
          ),
        ],
        { optional: true },
      ),
      query(
        ':leave',
        [
          animate(
            `${duration} ease-in`,
            style({ opacity: 0, transform: 'translateX(-30px)' }),
          ),
        ],
        { optional: true },
      ),
    ]),
  ]);
