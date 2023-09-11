import { Pipe, PipeTransform } from '@angular/core'; 
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
 

@Pipe({ 
    name: 'highlighter', 
}) 
 

export class HighlighterPipe implements PipeTransform { 
 
    
    transform( originalText: string,  textToFind: string
    ): string { 
        if (typeof originalText !== 'string' || !textToFind) { 
            return originalText; 
        } 
 
        const pattern = textToFind 
            .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&') 
            .split(' ') 
            .filter((t) => t.length > 0) 
            .join('|'); 
 
        const regex = new RegExp(pattern, 'gi'); 
 
        let result = textToFind 
            ? originalText.replace( 
                regex, 
                (match) => `<span class="fire">${match}</span>` 
            ) 
            : originalText; 
 
        return result; 
    } 
} 
