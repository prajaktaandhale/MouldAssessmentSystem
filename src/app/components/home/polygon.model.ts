export class Polygon {

    constructor(public id: number, 
        public name: string, 
        public category: string, 
        public batchNumber: string, 
        public make: string, 
        public cycles: string,
        public fileData: string, 
        public polygon_status: string,
        public sku: string,
        public assemblyLineNumber: any,
        public manufacturor: string,
        public dicommisionDate : Date
        ) {
            
    }
}