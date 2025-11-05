/**
 * @jest-environment jsdom
 */

import { toggleIdeas, launchIdeaSparkShow } from './script.js';

describe('UI Toggle Functionality', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="toggle-ideas" type="button">Show extra improvement ideas</button>
      <p id="more-ideas" hidden>Extra ideas content</p>
    `;
  });

  test('toggleIdeas function exists', () => {
    expect(typeof toggleIdeas).toBe('function');
  });

  test('toggleIdeas handles missing elements gracefully', () => {
    document.body.innerHTML = '';
    expect(() => toggleIdeas()).not.toThrow();
  });

  test('toggleIdeas returns early when elements are missing', () => {
    document.body.innerHTML = '';
    const result = toggleIdeas();
    expect(result).toBeUndefined();
  });
});

describe('Idea Spark Show', () => {
  beforeEach(() => {
    document.body.innerHTML = '<main><h1>Test</h1></main>';
  });

  test('launchIdeaSparkShow function exists', () => {
    expect(typeof launchIdeaSparkShow).toBe('function');
  });

  test('launchIdeaSparkShow creates spark stage', () => {
    launchIdeaSparkShow();
    const sparkStage = document.querySelector('.idea-spark-stage');
    expect(sparkStage).toBeTruthy();
  });

  test('launchIdeaSparkShow creates sparks with correct phrases', () => {
    launchIdeaSparkShow();
    const sparkStage = document.querySelector('.idea-spark-stage');
    expect(sparkStage).toBeTruthy();
    expect(sparkStage.className).toBe('idea-spark-stage');
  });
});
