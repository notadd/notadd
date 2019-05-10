import { TestBed, async } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';

const translationsEn = require('../assets/i18n/en.json');
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe('AppComponent', () => {
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: [AppComponent],
      providers: [TranslateService]
    }).compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render xplat hello in a h2 tag', async(() => {
    spyOn(translate, 'getBrowserLang').and.returnValue('en');
    translate.use('en');
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;

    // the DOM should be empty for now since the translations haven't been rendered yet
    expect(compiled.querySelector('h1').textContent).toEqual('');

    http.expectOne('/assets/i18n/en.json').flush(translationsEn);

    // Finally, assert that there are no outstanding requests.
    http.verify();
    fixture.detectChanges();

    expect(compiled.querySelector('h2').textContent).toContain('Hello xplat');
  }));
});
