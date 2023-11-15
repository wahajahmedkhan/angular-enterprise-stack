import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable()
export class ToasterService {
  private readonly document = inject(DOCUMENT);

  private lastToast?: HTMLDivElement;

  private intervalId?: any;
  constructor() {}

  showToast(message: string, type: 'success' | 'error') {
    this.removeLastToast();
    const toast = this.document.createElement('div');
    toast.innerText = message;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.backgroundColor = type === 'success' ? 'green' : 'red';
    toast.style.color = 'white';
    toast.style.padding = '10px';
    toast.style.borderRadius = '5px';
    this.lastToast = toast;
    this.document.body.appendChild(toast);

    this.intervalId = setTimeout(() => {
      this.removeLastToast();
    }, 3000);
  }

  removeLastToast(): void {
    if (this.lastToast) {
      this.document.body.removeChild(this.lastToast);
      this.lastToast = undefined;
      clearInterval(this.intervalId);
    }
  }
}
