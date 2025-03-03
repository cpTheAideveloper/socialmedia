declare namespace ContentPlanner {
    export interface Idea {
      idea: string;
      subtitle: string;
      type: string;
    }
  
    export interface GenerateRequest {
      industry: string;
      frequency: string;
      contentType: string;
      extraIdeas?: string;
    }
  
    export interface GenerateResponse {
      ideas: Idea[];
    }
  }
  
  export {ContentPlanner};