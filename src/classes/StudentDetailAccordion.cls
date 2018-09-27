public with sharing class StudentDetailAccordion {
    @AuraEnabled
    public static List<Certification_Held__c >
        getCertificationsForStudent(Id contactId) {
            return [
                SELECT Id, Date_Achieved__c, Certification__r.Name
                FROM Certification_Held__c
                WHERE Certified_Professional__c = :contactId
            ];
        }
}