public class CertificationExpiry {
    @AuraEnabled
    public static Double getDaysToExpiry(){
        Organization myOrg = [SELECT TrialExpirationDate FROM Organization Limit 1];
        DateTime exp = myOrg.TrialExpirationDate;
        DateTime now = System.now();
        integer intDays =  now.Date().daysBetween(exp.Date());
        return intDays;
    }
}