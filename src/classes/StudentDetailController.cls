public with sharing class StudentDetailController {
	@AuraEnabled
    public static List<Course_Attendee__c> getCourseAttendees(String studentId){
        return [SELECT Id, Name, Status__c, Course_Delivery__r.Start_Date__c, InstructorNotes__c FROM Course_Attendee__c WHERE Student__c =: studentId];
    }
}