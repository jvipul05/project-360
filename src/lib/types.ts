export type Status='ACTIVE'|'MAINTENANCE'|'INACTIVE';export type Criticality='LOW'|'MEDIUM'|'HIGH'|'CRITICAL';
export interface Project{id:string;name:string;code:string;client:string;domain:string;manager:string;technicalManager:string;applications:number;members:number;status:string;readiness:number}
export interface Application{id:string;name:string;code:string;description:string;technology:string[];database:string;status:Status;criticality:Criticality;readiness:number;primarySpoc:string;backupSpoc?:string;businessOwner?:string}
export interface User{id:string;name:string;email:string;role:string;team:string;applications:string[];expertise:string[];availability:string;manager:string;lastActive:string;responsibilities:string[]}
export interface AccessRequest{id:string;employee:string;application:string;environment:string;access:string;requested:string;status:'PENDING'|'APPROVED'|'REJECTED'|'EXPIRED';approver:string;reason:string;duration:string}
export interface Plan{id:string;employee:string;role:string;application:string;manager:string;joiningDate:string;template:string;tasks:Record<string,{name:string;status:'done'|'pending'|'not started'}[]>}
export interface Training{id:string;topic:string;trainer:string;trainee:string;application:string;date:string;duration:number;status:'Scheduled'|'Completed'|'Pending';agenda:string[]}
export interface Handover{id:string;outgoing:string;incoming:string;application:string;deadline:string;risk:string;items:{name:string;status:'done'|'pending'|'not started'}[];sessions:{name:string;status:string}[];approved:boolean;confirmed:boolean}
export interface Article{id:string;title:string;category:string;application:string;owner:string;updated:string;content:string}
