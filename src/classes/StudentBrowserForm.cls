public with sharing class StudentBrowserForm {
    @AuraEnabled
    public static List<User> getInstructors() {
         return [
            SELECT Id, Name
            FROM User
            WHERE Is_Instructor__c = true
            ORDER BY Name
        ];
    }
    @AuraEnabled
    public static List<Course_Delivery__c> getDeliveriesByInstructor(Id instructorId ) {
        return [
            SELECT Id, Start_Date__c, Location__c, Attendee_Count__c
            FROM Course_Delivery__c
            WHERE Instructor__c = :instructorId AND Status__c IN ('Enrolled','Completed','Delivered','Scheduled')
            ORDER BY Start_Date__c DESC
        ];
    }

}