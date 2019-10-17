import { TestBed, async } from '@angular/core/testing';
import { MovieStreamingAppComponent } from './movie_streaming_app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieStreamingAppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MovieStreamingAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'biiinge'`, () => {
    const fixture = TestBed.createComponent(MovieStreamingAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('biiinge');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(MovieStreamingAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to biiinge!'
    );
  });
});
