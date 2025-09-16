package br.com.diario.auth;

public record RegisterRequest(String email, String password, String nomeCompleto) {}
