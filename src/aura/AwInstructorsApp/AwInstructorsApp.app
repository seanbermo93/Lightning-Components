<aura:application extends="force:slds"
                  template="c:AwInstructorsAppTemplate">
    <aura:attribute name="sound"
                    type="String"
                    default="Sad Trombone"/>
    <aura:attribute name="message"
                    type="String"
                    default="D'Oh"/>
    
    <!--<c:PanicButton sound="{!v.sound}"
                   message="{!v.message}"/> -->
    <c:awInstructors />
    
</aura:application>