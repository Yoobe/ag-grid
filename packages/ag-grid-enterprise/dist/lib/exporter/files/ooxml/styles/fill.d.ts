// ag-grid-enterprise v21.0.1
import { ExcelOOXMLTemplate } from 'ag-grid-community';
declare const fillFactory: ExcelOOXMLTemplate;
export default fillFactory;
export interface Fill {
    patternType: string;
    fgTheme?: string;
    fgTint?: string;
    fgRgb?: string;
    bgIndexed?: string;
    bgRgb?: string;
}
