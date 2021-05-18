import {hasAccidental, splitNoteOctave} from './noteUtils'

describe('noteUtils', () => {
    describe('hasAccidental',  () => {
        it('should be true when flat', () => {
            expect(hasAccidental('Bb')).toBe(true);
        });

        it('should be true when sharp', () => {
            expect(hasAccidental('C#')).toBe(true);
        });

        it('should be false when neither sharp nor flat', () => {
            expect(hasAccidental('A')).toBe(false);
        });
    });

    describe('splitNoteOctave', () => {
        it('should split natural correctly', () => {
            expect(splitNoteOctave('E5')).toStrictEqual(['E', '5']);
        });

        it('should split accidental correctly', () => {
            expect(splitNoteOctave('C#4')).toStrictEqual(['C#', '4']);
        });
    });

});