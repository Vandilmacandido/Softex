import java.util.Scanner;

public class Main
{
	public static void main(String[] args) {
	    Scanner Input = new Scanner(System.in);
	    int num;
	    try{
	        System.out.println("Digite um elemento com o valor inteiro: ");
	        num = Input.nextInt();
	        System.out.println("O elemento inteiro digitado foi: "+ num);
	    }catch(Exception erro){
	        System.out.println("O elemento inserido tem que ser um valor inteiro! "+ erro);
	    }
	}
}
