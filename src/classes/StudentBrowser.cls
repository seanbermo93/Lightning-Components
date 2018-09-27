public with sharing class StudentBrowser {
    @AuraEnabled
    public static List<Contact> getStudents(String courseDeliveryId, String instructorId){
        String query = 'SELECT Id, Name, Email, Phone, Title, Account.Name, PhotoUrl FROM Contact WHERE Name <> \'\'';
        
        if (courseDeliveryId != '') {
            query = query + ' AND Id IN (SELECT Student__c FROM course_attendee__c WHERE course_delivery__c = \'' + String.escapeSingleQuotes(courseDeliveryId) + '\')';
        } else if (instructorId != '') {
            query = query + ' AND Id IN (SELECT Student__c FROM course_attendee__c WHERE course_delivery__r.Instructor__c = \'' + String.escapeSingleQuotes(instructorId) + '\')';
        }
        
        query = query + ' ORDER BY Name';
        
        List<Contact> sobjList = Database.query(query);
        return sobjList;
    }
}